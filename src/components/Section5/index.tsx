import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const QNA = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is the capital of Spain?",
    answer: "Madrid",
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    answer: "Rome",
  },
  {
    question: "What is the capital of Portugal?",
    answer: "Lisbon",
  },
];

const Section5 = () => {
  const [selected, setSelected] = useState(0);
  const [isFeedback, setIsFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSelect = (index: number) => {
    setIsFeedback(false);
    setSelected(index);
    setFeedback(QNA[index].answer);
  };
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="space-between"
      spacing={2}
      sx={{
        width: "100%",
        padding: "2rem",
        backgroundColor: "#FE9393",
      }}
      gap={5}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{
          width: "50%",
        }}
      >
        <Typography variant="h5">Question</Typography>
        {QNA.map((qna, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
              padding: "1rem",
              backgroundColor:
                selected === index && !isFeedback ? "#FF6969" : "white",
              borderRadius: "10px",
              cursor: "pointer",
              color: selected === index && !isFeedback ? "white" : "black",
            }}
            onClick={() => handleSelect(index)}
          >
            <Typography>{qna.question}</Typography>
          </Stack>
        ))}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: "100%",
            padding: "1rem",
            backgroundColor: isFeedback ? "#FF6969" : "white",
            borderRadius: "10px",
            cursor: "pointer",
            color: isFeedback ? "white" : "black",
          }}
          onClick={() => {
            setIsFeedback(true);
            setFeedback("");
          }}
        >
          <Typography
            onClick={() => {
              setIsFeedback(true);
              setFeedback("");
            }}
            sx={{ cursor: "pointer" }}
          >
            Feedback
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{
          width: "50%",
        }}
      >
        <Typography variant="h5">Answer</Typography>
        <TextField
          value={isFeedback ? feedback : QNA[selected].answer}
          disabled={!isFeedback}
          multiline
          rows={10}
          fullWidth
          onChange={(e) => setFeedback(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        />
        {isFeedback && (
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                setIsFeedback(false);
                setFeedback(QNA[selected].answer);
              }}
              sx={{
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                QNA[selected].answer = feedback;
                setIsFeedback(false);
              }}
              sx={{
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Save
            </Button>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Section5;
