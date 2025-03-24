import { getSize } from '../hooks/use-responsive-dimensions';

export function getSizeIconInProfile(size: number = 40): number {
  return getSize(size);
}
