import { FC } from 'react'
import Sticky from 'react-stickynode'

import { Container, Group, useMantineTheme } from '@mantine/core'

import { ActionMenu } from '@/components/action-menu'
import { AppLogo } from '@/components/app-logo'
import { UserMenu } from '@/components/user-menu'

interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = () => {
  /* Hook Init */
  const theme = useMantineTheme()

  return (
    <Sticky
      top={0}
      innerZ={50}
    >
      <header
        style={{
          zIndex: 10,
          padding: `${theme.spacing.md} 0`,
          boxShadow: theme.shadows.sm,
          backgroundColor: 'white',
        }}
      >
        <Container fluid>
          <Group gap={'sm'}>
            <AppLogo />

            <ActionMenu />

            <UserMenu />
          </Group>
        </Container>
      </header>
    </Sticky>
  )
}
