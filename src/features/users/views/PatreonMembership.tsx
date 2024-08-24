import { useRouter } from 'next/compat/router'

import { hasPatreonFeaturesEnabled } from '@/config/featureFlags'
import { patreonTiers } from '@/config/patreon'
import { useSession } from '@/features/users/auth/hooks/useSession'
import { UserRestrictedArea } from '@/lib/components/panels/UserRestrictedArea'
import { createSessionMembershipPlaceholder } from '../repository/createMembershipPlaceholder'

import { PatreonButton, PatreonUnlinkButton } from '../components/PatreonButtons'

export function PatreonMembership(): JSX.Element | null {
  const auth = useSession()
  const router = useRouter()
  const { error: errorParam } = router ? router.query : { error: undefined }

  if (!hasPatreonFeaturesEnabled() || !auth.currentUser) {
    return null
  }

  const membership = auth.membership ?? createSessionMembershipPlaceholder(auth.currentUser.uid)
  const hasMembership = membership !== null
  const hasLinkedPatreon = membership.patreonUserId !== null
  const _expirationDate = membership.expiresAt ? new Date(membership.expiresAt) : null
  const isPaidMember = membership.isSubscriptionTier

  return (
    <UserRestrictedArea>
      <p>
        <b>Patreon Membership: </b>
        <code style={{ color: 'var(--color-blueberry-accent)' }}>{patreonTiers[membership.currentTier].name}</code>
        {isPaidMember && (
          <i
            className="icon-pkg-shiny"
            style={{
              color: 'orange',
              fontSize: '1.2rem',
              marginLeft: '0.2rem',
            }}
          />
        )}
      </p>
      <p>
        <b>Entitled Rewards: </b>
        <code style={{ color: 'var(--color-blueberry-accent)' }}>
          {membership.rewardMaxDexes} dexes
          {membership.rewardFeaturedStreamer ? ', featured streamer' : ''}
        </code>
      </p>
      {hasMembership && _expirationDate && (
        <p>
          <b>Membership Expiration Date: </b>
          <code style={{ color: 'var(--color-blueberry-accent)' }}>{_expirationDate.toLocaleDateString()}</code>
        </p>
      )}

      {!hasLinkedPatreon && (
        <>
          <div>
            <PatreonButton />
          </div>
          {errorParam === 'no_membership' && (
            <>
              <small
                style={{
                  fontWeight: 'bold',
                  color: 'var(--color-scarlet-2)',
                  margin: '0.5rem 0',
                }}
              >
                Cannot link your Patreon account: You need to become a patron before you can link your Patreon account.
              </small>
              <br />
              <small
                style={{
                  fontWeight: 'normal',
                  color: 'var(--color-scarlet-2)',
                  margin: '0.5rem 0',
                }}
              >
                If you think this could be a mistake, please send us a message via Patreon, indicating your Support ID
                and we will investigate the issue.
              </small>
              <br />
              <br />
            </>
          )}
          <small style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
            Link your Patreon account and become a patron to unlock extras in the website and Discord.
          </small>
        </>
      )}

      {hasLinkedPatreon && (
        <>
          <div>
            <PatreonUnlinkButton patreonUserId={membership.patreonUserId} />
          </div>
        </>
      )}
      <hr />
    </UserRestrictedArea>
  )
}