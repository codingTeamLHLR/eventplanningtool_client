import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function stringToColor(string = "") {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name = "") {
  const split = name.split(" ");
  let initials = split[0][0];
  if (split.length > 1) {
    initials = initials + split[1][0];
  }

  return {
    sx: {
      bgcolor: stringToColor(initials),
    },
    children: initials.toUpperCase(),
  };
}

export default function BackgroundLetterAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(props.name)} />
    </Stack>
  );
}
