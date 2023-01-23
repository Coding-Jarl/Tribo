import {
  Datagrid,
  List,
  NumberField,
  TextField,
  ImageField,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export function BoardgameList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="imgUrl" title="Thumbnail" />
        <NumberField source="minPlayers" />
        <NumberField source="maxPlayers" />
        <NumberField source="minDuration" />
        <NumberField source="maxDuration" />
        <NumberField source="minAge" />
        <NumberField source="year" />
      </Datagrid>
    </List>
  );
}

export function BoardgameEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="imgUrl" />
        <RichTextInput source="description" />
        <NumberInput source="minPlayers" />
        <NumberInput source="maxPlayers" />
        <NumberInput source="minDuration" />
        <NumberInput source="maxDuration" />
        <NumberInput source="minAge" />
        <DateInput source="createdAt" />
        <NumberInput source="year" />
        <TextInput source="idOwner" />
      </SimpleForm>
    </Edit>
  );
}
