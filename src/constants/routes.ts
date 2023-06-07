export const routes = {
  Governance: '/daos',
  DappStore: '/tools',
  Page: '/page/:chainId/:address',

  _DaoInfo: '/governance/daoInfo',
  DaoInfo: '/governance/daoInfo/:daoId',
  Proposal: '/governance/daoInfo/:daoId/proposal',
  CreateProposal: '/governance/daoInfo/:daoId/proposal/create',
  ProposalDetail: '/governance/daoInfo/:daoId/proposal/detail/:proposalId',
  DaoInfoActivity: '/governance/daoInfo/:daoId/DAO_Rewards',
  CreatePublicSale: '/governance/daoInfo/:daoId/DAO_Rewards/create_sale',
  CreateAirdrop: '/governance/daoInfo/:daoId/DAO_Rewards/create_DAO_Rewards',
  DaoInfoAbout: '/governance/daoInfo/:daoId/about',
  DaoInfoSettings: '/governance/daoInfo/:daoId/settings',
  DaoMember: '/governance/daoInfo/:daoId/member',
  DaoTreasury: '/governance/daoInfo/:daoId/treasury',
  DaoIdea: '/governance/daoInfo/:daoId/idea',
  DaoBounty: '/governance/daoInfo/:daoId/bounty',
  DaoAboutSetting: '/governance/daoInfo/:daoId/about_setting',
  DaoTeamMeetings: '/governance/daoInfo/:daoId/teamspaces/general/meetings',
  DaoTeamDocs: '/governance/daoInfo/:daoId/teamspaces/general/docs',
  DaoTeamTask: '/governance/daoInfo/:daoId/teamspaces/general/workspace',
  DaoTeamCalendar: '/governance/daoInfo/:daoId/teamspaces/general/calendar',
  DaoTeamTrash: '/governance/daoInfo/:daoId/teamspaces/general/trash',

  Activity: '/activity',
  _ActivityAirdropDetail: '/activity/dao_drop',
  ActivityAirdropDetail: '/activity/dao_drop/:chainId/:address/:id',
  _ActivitySaleDetail: '/activity/sale',
  ActivitySaleDetail: '/activity/sale/:chainId/:address/:id',
  Tokens: '/tokens',

  Creator: '/creator',
  CreatorDao: '/creator/dao',
  CreateDao: '/create/dao',
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
