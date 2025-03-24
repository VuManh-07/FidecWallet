import { Image, Text, TouchableOpacity, View } from 'react-native';

const TransactionItem = ({
  dateTime,
  type,
  status,
  amount,
  amountInUsd,
}: {
  dateTime: string;
  type: string;
  status: string;
  amount: string;
  amountInUsd: string;
}) => (
  <View className="border-b border-gray-700 pb-2">
    {/* Ngày giờ */}
    <Text className="text-xs text-gray-400">{dateTime}</Text>

    {/* Nội dung giao dịch */}
    <View className="flex-row items-center justify-between bg-black p-2">
      {/* Bên trái: Icon + Thông tin giao dịch */}
      <View className="flex-row items-center">
        {/* Icon Gửi/Nhận BNB */}
        <Image
          source={{
            uri:
              type === 'Sent BNB'
                ? 'https://cdn-icons-png.flaticon.com/512/2989/2989988.png' // Icon gửi
                : 'https://cdn-icons-png.flaticon.com/512/2989/2989970.png', // Icon nhận
          }}
          className="mr-2 size-6"
        />

        {/* Thông tin giao dịch */}
        <View>
          <Text className="font-semibold text-white">{type}</Text>
          <Text className="text-sm text-gray-500">{status}</Text>
        </View>
      </View>

      {/* Bên phải: Số lượng BNB + USD */}
      <View className="items-end">
        <Text className="font-semibold text-white">{amount}</Text>
        <Text className="text-sm text-gray-500">- {amountInUsd}</Text>
      </View>
    </View>

    {/* Hiển thị nút nếu trạng thái là "Pending..." */}
    {status === 'Pending...' && (
      <View className="mt-2 flex-row space-x-2">
        <TouchableOpacity className="rounded bg-red-500 px-3 py-1">
          <Text className="text-sm text-white">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded bg-blue-500 px-3 py-1">
          <Text className="text-sm text-white">Edit</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

export default TransactionItem;
