import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container, Content } from './styles';

interface ProgressBarProps {
  fill: number;
}

// This is a left and right space
const CONTENT_OFFSET = 10;

function ProgressBar({ fill }: ProgressBarProps) {
  const [fullContentWidth, setFullContentWidth] = useState<number | null>(null);

  const progress = useSharedValue(0);

  useEffect(() => {
    if (fullContentWidth && fill >= 0 && fill <= 1) {
      progress.value = withTiming(fill * fullContentWidth);
    }
  }, [fill, progress, fullContentWidth]);

  function handleContainerLayout(event: LayoutChangeEvent) {
    const { width } = event.nativeEvent.layout;

    setFullContentWidth(width - CONTENT_OFFSET);
  }

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    marginLeft: CONTENT_OFFSET / 2,
    marginRight: CONTENT_OFFSET / 2,
    marginTop: CONTENT_OFFSET / 2,
    width: progress.value,
  }));

  return (
    <Container onLayout={handleContainerLayout}>
      <Content style={contentAnimatedStyle} />
    </Container>
  );
}

export default ProgressBar;
