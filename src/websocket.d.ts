import { PresenceMemberInfo } from "./channels/presence-channel-manager"

declare module "uWebSockets.js" {
  interface WebSocket<UserData> {
    id: string
    presence: Map<string, PresenceMemberInfo>
    user: UserData
    sendJson: (data: any) => void
    appKey: string
    subscribedChannels: Set<string>
    timeout: NodeJS.Timeout | null
    userAuthenticationTimeout: NodeJS.Timeout | null
    app: any
  }
}
