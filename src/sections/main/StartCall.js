import React from "react";
import * as Yup from "yup";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";
import { ChatList } from "../../data";
import { CallElement, CallLogElement } from "../../components/CallElement";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TAGS_OPTION = [
  "Toy Story 3",
  "Logan",
  "Full Metal Jacket",
  "Dangal",
  "The Sting",
  "2001: A Space Odyssey",
  "Singin' in the Rain",
  "Toy Story",
  "Bicycle Thieves",
  "The Kid",
  "Inglourious Basterds",
  "Snatch",
  "3 Idiots",
];

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),

    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",

    tags: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //  API Call
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Title" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={TAGS_OPTION.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          spacing={2}
          direction={"row"}
          alignItems="center"
          justifyContent={"end"}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle  >{"Start Call"}</DialogTitle>

      <DialogContent sx={{ mt: 4 , pt:4}}>


        <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search" />
            </Search>
          </Stack>

        <Stack spacing={2.4}>
                {ChatList.filter((item) => !item.pinned).map((chat) => {
                  return <CallElement key={chat.id} {...chat} />;
                })}
              </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;