import { join, resolve } from "path";
import codegen from "@cosmwasm/ts-codegen";

const contractsDir = resolve(join(__dirname, "../contracts"));
const contracts = [
  {
    name: "CWAdminFactory",
    dir: join(contractsDir, "cw-admin-factory"),
  },
  {
    name: "CWCore",
    dir: join(contractsDir, "cw-core"),
  },
  {
    name: "CWNamedGroups",
    dir: join(contractsDir, "cw-named-groups"),
  },
  {
    name: "CWNamesRegistry",
    dir: join(contractsDir, "cw-names-registry"),
  },
  {
    name: "CWNativeStakedBalanceVoting",
    dir: join(contractsDir, "cw-native-staked-balance-voting"),
  },
  {
    name: "CWProposalMultiple",
    dir: join(contractsDir, "cw-proposal-multiple"),
  },
  {
    name: "CWProposalSingle",
    dir: join(contractsDir, "cw-proposal-single"),
  },
  {
    name: "CWTokenSwap",
    dir: join(contractsDir, "cw-token-swap"),
  },
  {
    name: "CW4Voting",
    dir: join(contractsDir, "cw4-voting"),
  },
  {
    name: "Profiles",
    dir: join(contractsDir, "coolcat-profiles"),
  },
    {
    name: "CW721Base",
    dir: join(contractsDir, "cw721-base"),
  },
  {
    name: "CW721CharacterOnChain",
    dir: join(contractsDir, "cw721-character-onchain"),
  },
  {
    name: "CW721TraitOnChain",
    dir: join(contractsDir, "cw721-trait-onchain"),
  },
  {
    name: "CCATCharacterManager",
    dir: join(contractsDir, "ccat-character-manager"),
  },
  {
    name: "CCATTraitManager",
    dir: join(contractsDir, "ccat-trait-manager"),
  },
  {
    name: "CCATMintables",
    dir: join(contractsDir, "ccat-mintables"),
  },
];

codegen({
  contracts,
  outPath: join(__dirname, "../src"),
  options: {
    bundle: {
      enabled: true,
      bundleFile: "index.ts",
      scope: "contracts",
    },
    types: {
      enabled: true,
      aliasExecuteMsg: true,
    },
    client: {
      enabled: true,
      execExtendsQuery: true,
    },
    messageComposer: {
      enabled: true,
    },
  },
})
  .then(() => {
    console.log("✨ Generated CoolCat contracts package!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
