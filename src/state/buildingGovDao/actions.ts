import { createAction } from '@reduxjs/toolkit'

export enum VotingTypes {
  ANY,
  SINGLE,
  MULTI
}
export const VotingTypesName = {
  [VotingTypes.ANY]: 'Any',
  [VotingTypes.SINGLE]: 'Single-voting',
  [VotingTypes.MULTI]: 'Multi-voting'
}

export enum CategoriesTypeProp {
  ALL = 'All',
  Social = 'Social',
  Protocol = 'Protocol',
  NFT = 'NFT',
  Metaverse = 'Metaverse',
  Gaming = 'Gaming',
  // Dapp = 'Dapp',
  Other = 'Other'
}

export type govList = {
  chainId: number
  createRequire: string
  decimals: number
  symbol: string
  tokenAddress: string
  tokenLogo: string
  tokenName: string
  tokenType: string
  voteTokenId: number
  weight: number
}

export type PrivateSpacesProp = {
  isJoin: boolean
  spacesId: number
}

export interface CreateDaoListDataProp {
  name: string
  logo: string
}

export interface MyJoinDaoDataProp {
  isJoin: boolean
  job: string
  privateSpaces: PrivateSpacesProp[]
}
export interface CreateDaoDataProp {
  approve: boolean
  bio: string
  daoCanCreateProposal: boolean
  daoName: string
  handle: string
  daoLogo: string
  github: string
  website: string
  twitter: string
  discord: string
  category: string[]
  daoId: number
  governance: govList[]
  createProposalMinimum: string
  executeMinimum: string
  proposalThreshold: string
  votingPeriod: 0
  votingType: VotingTypes.ANY
}

export const updateCreateDaoData = createAction<{ createDaoData: CreateDaoDataProp }>('buildingDao/updateCreateDaoData')
export const updateDaoListData = createAction<{ createDaoListData: CreateDaoListDataProp[] }>(
  'buildingDao/updateDaoListData'
)
export const updateMyJoinDaoData = createAction<{ myJoinDaoData: MyJoinDaoDataProp }>('buildingDao/updateMyJoinDaoData')
export const removeCreateDaoData = createAction('buildingDao/removeCreateDaoData')
