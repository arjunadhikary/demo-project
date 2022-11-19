import {
  createStyles,
  Group,
  Paper,
  Text,
  ThemeIcon,
  SimpleGrid,
} from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export interface StatsGridIconsProps {
  data: { title: string; value: string; sector: string }[];
}

export function StatsGridIcons({ data }: StatsGridIconsProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const DiffIcon = +stat.value > 10 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper
        withBorder
        p="md"
        radius="md"
        key={stat.title}
        style={{ backgroundColor: 'black' }}
      >
        <Group position="apart">
          <div>
            <Text
              color="white"
              transform="uppercase"
              weight={700}
              size="xs"
              className={classes.label}
            >
              {stat.sector}
            </Text>
            <Text
              weight={700}
              size="xl"
              style={{ color: 'whitesmoke', textAlign: 'center' }}
            >
              {stat.title}
            </Text>
          </div>
          <ThemeIcon
            color="black"
            variant="light"
            sx={(theme) => ({
              color:
                +stat.value > 10 ? theme.colors.teal[6] : theme.colors.red[6],
            })}
            size={38}
            radius="md"
          >
            <DiffIcon size={28} stroke={1.5} />
          </ThemeIcon>
        </Group>
        <Text color="dimmed" size="sm" mt="md">
          <Text
            component="span"
            color={+stat.value > 0 ? 'teal' : 'red'}
            weight={700}
          >
            {stat.value}% bonus capacity
          </Text>{' '}
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}
