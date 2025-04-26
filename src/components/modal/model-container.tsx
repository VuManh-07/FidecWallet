/* eslint-disable max-lines-per-function */
import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import { useColorScheme } from 'nativewind';
import * as React from 'react';

import colors from '@/components/ui/colors';

import { Modal } from '../ui/modal';

type ModelProps = {
  children: React.ReactNode;
  isShowHeader?: boolean;
  snapPoints: string | number;
};

export const ModelContainer = React.forwardRef<BottomSheetModal, ModelProps>(
  ({ children, isShowHeader, snapPoints }, ref) => {
    const _snapPoints = React.useMemo(() => [snapPoints], [snapPoints]);
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={_snapPoints}
        backgroundStyle={{
          backgroundColor: isDark ? colors.neutral[800] : colors.white,
        }}
        isShowHeader={isShowHeader}
      >
        {children}
      </Modal>
    );
  }
);
