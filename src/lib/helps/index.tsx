import { getSize } from '../hooks/use-responsive-dimensions';

export function getSizeIconInProfile(size: number = 40): number {
  return getSize(size);
}

export function parseTransactionDate(dateTimeStr: string): Date {
  const regex = /^([A-Za-z]+) (\d{1,2}) at (\d{1,2}):(\d{2})(am|pm)$/;
  const match = dateTimeStr.match(regex);
  if (!match) return new Date('Invalid');

  const [, monthStr, dayStr, hourStr, minuteStr, period] = match;
  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const now = new Date(); // Lấy năm hiện tại
  const month = monthMap[monthStr];
  const day = parseInt(dayStr, 10);
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  if (period === 'pm' && hour < 12) hour += 12;
  if (period === 'am' && hour === 12) hour = 0;

  return new Date(now.getFullYear(), month, day, hour, minute);
}

export function isToday(date: Date) {
  const now = new Date();
  return date.toDateString() === now.toDateString();
}

export function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return date.toDateString() === yesterday.toDateString();
}

export function isThisWeek(date: Date) {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  return date >= startOfWeek && date < endOfWeek;
}

export function isThisMonth(date: Date) {
  const now = new Date();
  return (
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

export function formatDateOffset(daysOffset: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date
    .toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .replace(',', ' at');
}

/**
 * Get our address from params checking if params string contains one
 * of our wallet addresses
 */
export function getWalletAddressFromParams(addresses: string[], params: any) {
  const paramsString = JSON.stringify(params);
  let address = '';

  addresses.forEach((addr) => {
    if (paramsString.toLowerCase().includes(addr.toLowerCase())) {
      address = addr;
    }
  });

  return address;
}

/**
 * Check if chain is part of EIP155 standard
 */
export function isEIP155Chain(chain: string) {
  return chain.includes('eip155');
}
