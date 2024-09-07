"use client";
import { Container, Text, Title , Pagination , Group, Center} from "@mantine/core";
import Rating from "@components/Rating";
import UReview from "@components/Review";
import Comments from "@components/Comments";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Rating/>
      <UReview/>
      <Comments name="Mao Zedong" rating={3} details="This conference has gone very well"/>
      <Comments name="Abraham Lincoln" rating={1} details="I have never killed zombies"/>
      <Group justify="center">
        <Pagination mt={"sm"} total={20} color="orange"/>
      </Group>
    </Container>
  );
}
