import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
      />
      <TextInput
        placeholder="카테고리를 작성해주세요 "
        style={styles.categoryInput}

      />
      <TextInput
        placeholder="게시글 내용을 작성해주세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1, padding: 16 },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: "#263238",
    fontWeight: "bold",
  },
  categoryInput: {
    paddingVertical: 0,
    fontSize: 16,
    marginBottom: 16,
    color: "#263238",

    },
  bodyInput: {
    flex: 10,
    fontSize: 16,
    paddingVertical: 0,
    color: "#263238",
  },
});

export default WriteEditor;