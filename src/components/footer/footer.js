import * as React from 'react';
import PropTypes from 'prop-types';
import { applySolidInversion } from '@mui/joy/colorInversion';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

function Stat({ description, value }) {
  return (
    <Box sx={{ borderLeft: 3, borderColor: 'divider', px: 2, py: 0.5 }}>
      <Typography level="h3" component="div">
        {value}
      </Typography>
      <Typography level="title-sm" textColor="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

Stat.propTypes = {
  description: PropTypes.node,
  value: PropTypes.node,
};

export default function ColorInversionAnyParent() {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          alignItems: 'center',
          rowGap: 2,
          columnGap: 8,
          p: 4,
          borderRadius: 'sm',
          background: `linear-gradient(45deg, ${theme.vars.palette.neutral[800]}, ${theme.vars.palette.neutral[600]})`,
        }),
        applySolidInversion('neutral'),
      ]}
    >
      <div>
        <Typography sx={{ mb: 2 }}>
          The youth are the driving force that transforms the world for the better. Fueled with passion and resilience, we drive transformation, and lay foundation for the future with hope and possibilities
        </Typography>
        <Button variant="soft">Support the youth</Button>
      </div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
            sm: '1fr 1fr',
          },
          gap: 3,
        }}
      >
        <Stat value="29.7M" description="VND raised" />
        <Stat value="14" description="Members recruited" />
        <Stat value="1.2K" description="Dollars raised" />
        <Stat value="1" description="Mission accomplished" />
      </Box>
    </Box>
  );
}