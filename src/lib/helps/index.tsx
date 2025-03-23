import { WIDTH } from '../hooks/use-responsive-dimensions';

export function getSizeIconInProfile(size: number = 40): number {
  return WIDTH(size);
}
