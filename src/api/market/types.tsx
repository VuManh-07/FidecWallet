export type Coin = {
  name: string; // Tên đồng coin (BTC, ETH,...)
  symbol: string; // Biểu tượng coin (BTC, ETH,...)
  price: string; // Giá hiện tại dạng chuỗi (ví dụ: "$26884.12")
  change: string; // Thay đổi phần trăm 24h (ví dụ: "-3.21%")
  icon: string; // URL icon
};
