import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container, Text } from './styles';

interface Location {
  x: number;
  y: number;
}
interface AnswerOptionProps {
  children: string;
  answerRef: RefObject<View | undefined>;
  onPress: (text: string) => void;
  isSelected?: boolean;
}

const DOWN_OFFSET = 8;

function AnswerOption({
  children,
  answerRef,
  onPress,
  isSelected = false,
}: AnswerOptionProps) {
  const containerRef = useRef<View>(null);

  const [initialLocation, setInitialLocation] = useState<Location | null>(null);

  const currentX = useSharedValue(0);
  const currentY = useSharedValue(0);

  function handlePress() {
    onPress(children);
  }

  const handleMoveToAnwerSelectedPosition = useCallback(() => {
    answerRef.current?.measure((...containerMeasure) => {
      const containerX = containerMeasure[4];
      const containerY = containerMeasure[5];

      containerRef.current?.measure((...rest) => {
        const px = rest[4];
        const py = rest[5];

        currentX.value = withTiming(containerX - px);
        currentY.value = withTiming(containerY - DOWN_OFFSET - py);
      });
    });
  }, [answerRef, containerRef, currentX, currentY]);

  const handleBackToInitialLocation = useCallback(() => {
    if (initialLocation) {
      currentX.value = withTiming(initialLocation.x);
      currentY.value = withTiming(initialLocation.y);
    }
  }, [currentX, currentY, initialLocation]);

  useEffect(() => {
    if (isSelected) {
      handleMoveToAnwerSelectedPosition();
    } else {
      handleBackToInitialLocation();
    }
  }, [
    handleBackToInitialLocation,
    handleMoveToAnwerSelectedPosition,
    isSelected,
  ]);

  function handleOnLayout(event: LayoutChangeEvent) {
    if (!initialLocation) {
      const { x, y } = event.nativeEvent.layout;

      setInitialLocation({ x, y });
    }
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: currentX.value,
      },
      {
        translateY: currentY.value,
      },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <View ref={containerRef}>
        <Container
          onLayout={handleOnLayout}
          wordLength={children.length}
          onPress={handlePress}>
          <Text>{children}</Text>
        </Container>
      </View>
    </Animated.View>
  );
}

export default AnswerOption;
