import { Text } from "native-base";

export const highlightText = (text: string, highlight: string) => {
  if (!highlight) return <Text>{text}</Text>;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <Text>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Text key={index} color="red.800">
            {part}
          </Text>
        ) : (
          part
        )
      )}
    </Text>
  );
};
