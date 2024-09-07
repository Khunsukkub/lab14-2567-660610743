import { Text , Rating, Textarea , Button } from "@mantine/core";

export default function UReview() {
  return (
    <div>
      <Textarea 
      label="Your review" 
      size="sm" 
      my="sm" 
      placeholder="Do you enjoy eating?"
      minRows={3}
      autosize
      />
      <Button color="orange" mb={"sm"}>Submit Review</Button>
    </div>
  );
}
