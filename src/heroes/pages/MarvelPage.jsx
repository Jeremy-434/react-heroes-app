import { Divider, Typography } from "@mui/material"
import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        fontWeight={400}
        paddingBottom={2}
      >
        Marvel Comics
      </Typography>
      <Divider />

      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}
