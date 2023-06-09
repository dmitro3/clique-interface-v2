export const routes = {
  Governance: '/daos',
  DappStore: '/tools',
  Page: '/page/:chainId/:address',

  _DaoInfo: '/governance/daoInfo',
  DaoInfo: '/governance/daoInfo/:chainId/:address',
  Proposal: '/governance/daoInfo/:chainId/:address/proposal',
  CreateProposal: '/governance/daoInfo/:chainId/:address/proposal/create',
  ProposalDetail: '/governance/daoInfo/:chainId/:address/proposal/detail/:proposalId',
  DaoInfoActivity: '/governance/daoInfo/:chainId/:address/DAO_Rewards',
  CreatePublicSale: '/governance/daoInfo/:chainId/:address/DAO_Rewards/create_sale',
  CreateAirdrop: '/governance/daoInfo/:chainId/:address/DAO_Rewards/create_DAO_Rewards',
  DaoInfoAbout: '/governance/daoInfo/:chainId/:address/about',
  DaoInfoSettings: '/governance/daoInfo/:chainId/:address/settings',
  DaoMember: '/governance/daoInfo/:chainId/:address/member',
  DaoTreasury: '/governance/daoInfo/:chainId/:address/treasury',
  DaoIdea: '/governance/daoInfo/:chainId/:address/idea',
  DaoBounty: '/governance/daoInfo/:chainId/:address/bounty',
  DaoAboutSetting: '/governance/daoInfo/:chainId/:address/about_setting',
  DaoTeamMeetings: '/governance/daoInfo/:chainId/:address/teamspaces/general/meetings',
  DaoTeamDocs: '/governance/daoInfo/:chainId/:address/teamspaces/general/docs',
  DaoTeamTask: '/governance/daoInfo/:chainId/:address/teamspaces/general/workspace',
  DaoTeamCalendar: '/governance/daoInfo/:chainId/:address/teamspaces/general/calendar',
  DaoTeamTrash: '/governance/daoInfo/:chainId/:address/teamspaces/general/trash',

  Activity: '/activity',
  _ActivityAirdropDetail: '/activity/dao_drop',
  ActivityAirdropDetail: '/activity/dao_drop/:chainId/:address/:id',
  _ActivitySaleDetail: '/activity/sale',
  ActivitySaleDetail: '/activity/sale/:chainId/:address/:id',
  Tokens: '/tokens',
  CreateSoulbound: '/createsoulbound',
  SoulboundDetail: '/soulboundDetail',

  Creator: '/creator',
  CreatorDao: '/creator/dao',
  CreatorToken: '/creator/token',

  Notification: '/notification',
  PushList: '/notification/push/list',

  Profile: '/profile/:address',
  _Profile: '/profile',
  CreateSales: '/createSale',
  SaleDetails: '/saleList/saleDetails/:saleId',
  _SaleDetails: '/saleList/saleDetails',
  SaleList: '/saleList',
  Home: '/home',
  Push: '/push'
}
