import { footerProps } from "@lib/types";
import { Text } from "@mantine/core";

export default function Footer({ year, fullName, studentId }: footerProps) {
  return (
    <div>
      <Text ta={"center"} my={"sm"} c={"gray"}>Copyright © {year} {fullName} {studentId}</Text>
    </div>
  );
}
