import { Text , Rating } from "@mantine/core";

export default function StarRating() {
  return (
    <div>
      <Text size="lg" fw={"bold" } mt="sm">Your rating</Text>
      <Rating defaultValue={0} size={"lg"} mb="sm"/>
    </div>
  );
}
