import { Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import { HeroList } from '../components/HeroList'
export const DcPage = () => {
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        fontWeight={400}
        paddingBottom={2}
      >
        DC Comics
      </Typography>
      <Divider />

      <HeroList publisher={'DC Comics'} />
    </>
  )
}
