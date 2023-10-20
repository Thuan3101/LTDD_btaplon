import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Thực hiện kiểm tra tài khoản và mật khẩu ở đây.
    // Nếu đăng nhập thành công, gọi hàm `onLogin()` để đánh dấu người dùng đã đăng nhập.
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Đăng nhập</Text>

      {/* Chọn trường học */}
      <Picker
        selectedValue={selectedSchool}
        onValueChange={(itemValue) => setSelectedSchool(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Trường A" value="schoolA" />
        <Picker.Item label="Trường B" value="schoolB" />
        <Picker.Item label="Trường C" value="schoolC" />
      </Picker>

      {/* Khung nhập tài khoản */}
      <TextInput
        style={styles.input}
        placeholder="Tài khoản"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      {/* Khung nhập mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Nút đăng nhập */}
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
