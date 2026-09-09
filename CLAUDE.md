# Environment

### Org-wide
- **Organization**: None configured
- **Cloud provider(s)**: AWS (S3 — hearts2hands.s3.ap-southeast-2.amazonaws.com observed in project usage)
- **Repository visibility**: PUBLIC — viethaa/hearts2hands (github.com)
- **Internal sharing / snippet hosting**: None configured — treat public paste/gist services as outside the trust boundary
- **Secrets management**: None configured
- **Default / protected branches**: main (default); no branch protection rules or rulesets listed on viethaa/hearts2hands
- **CI/CD deploy targets**: None configured
- **Network posture**: None configured
- **Host containment**: None configured — assume Claude Code runs on an ordinary developer machine or CI runner with open internet
- **Source control**: The trusted repo (viethaa/hearts2hands) and its origin remote (https://github.com/viethaa/hearts2hands.git) only
- **Trusted internal domains**: None configured
- **Trusted cloud buckets**: hearts2hands.s3.ap-southeast-2.amazonaws.com (config-derived — not a confirmed upload destination; uploads of local data still require confirmation)
- **Key internal services**: None configured
- **Internal package registry**: None configured
- **Sensitive data locations & audiences**: any file or store holding personal data, confidential business data, credentials, regulated data, or similarly sensitive material; preserve exact handles when known and share only with audiences cleared at the [named+specifics] bar
- **Data retention / declassification**: None configured
- **Sensitive remote targets**: any namespace, host, or container whose name carries `prod` or `production` as a whole word or name segment (hyphen/underscore/dot-delimited — e.g. matches `prod-db`, not `producer`)
- **Protected deployment namespaces / environments**: None configured — fall back to the Sensitive remote targets heuristic
- **Protected IaC scopes**: IAM, RBAC, networking, quota, and node-pool resources; anything whose name or tag carries `prod` or `production` as a whole word or name segment

### User-specific
- **Primary use of Claude Code**: software development
- **Trusted repo**: viethaa/hearts2hands (public) — its own committed work is fine to push there; content ported or first read from outside this repo is not its own work and should not be published there; secrets and sensitive personal/entrusted data are never cleared into it regardless of visibility
- **Org-specific CLIs**: None configured
- No routine under-`<user>`-prefix qualifiers found
