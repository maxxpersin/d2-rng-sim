export interface DestinyInventoryItemDefinition {
  displayProperties: {
    description: string;
    name: string;
    icon: string;
    hasIcon: boolean;
  };
  tooltipNotifications: any[];
  collectibleHash: number;
  iconWatermark: string;
  iconWatermarkShelved: string;
  backgroundColor: {
    colorHash: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
  screenshot: string;
  itemTypeDisplayName: string;
  flavorText: string;
  uiItemDisplayStyle: string;
  itemTypeAndTierDisplayName: string;
  displaySource: string;
  action: {
    verbName: string;
    verbDescription: string;
    isPositive: boolean;
    requiredCooldownSeconds: number;
    requiredItems: any[];
    progressionRewards: any[];
    actionTypeLabel: string;
    rewardSheetHash: number;
    rewardItemHash: number;
    rewardSiteHash: number;
    requiredCooldownHash: number;
    deleteOnAction: boolean;
    consumeEntireStack: boolean;
    useOnAcquire: boolean;
  };
  inventory: {
    maxStackSize: number;
    bucketTypeHash: number;
    recoveryBucketTypeHash: number;
    tierTypeHash: number;
    isInstanceItem: boolean;
    nonTransferrableOriginal: boolean;
    tierTypeName: string;
    tierType: number;
    expirationTooltip: string;
    expiredInActivityMessage: string;
    expiredInOrbitMessage: string;
    suppressExpirationWhenObjectivesComplete: boolean;
  };
  stats: {
    disablePrimaryStatDisplay: boolean;
    statGroupHash: number;
    stats: {
      [key: number]: {
        statHash: number;
        value: number;
        minimum: number;
        maximum: number;
        displayMaximum: number;
      };
    };
    hasDisplayableStats: boolean;
    primaryBaseStatHash: number;
  };
  equippingBlock: {
    uniqueLabelHash: number;
    equipmentSlotTypeHash: number;
    attributes: number;
    equippingSoundHash: number;
    hornSoundHash: number;
    ammoType: number;
    displayStrings: string[];
  };
  translationBlock: {
    weaponPatternHash: number;
    defaultDyes: {
      channelHash: number;
      dyeHash: number;
    }[];
    lockedDyes: any[];
    customDyes: any[];
    arrangements: {
      classHash: number;
      artArrangementHash: number;
    }[];
    hasGeometry: boolean;
  };
  preview: {
    screenStyle: string;
    previewVendorHash: number;
    previewActionString: string;
  };
  quality: {
    itemLevels: any[];
    qualityLevel: number;
    infusionCategoryName: string;
    infusionCategoryHash: number;
    infusionCategoryHashes: number[];
    progressionLevelRequirementHash: number;
    currentVersion: number;
    versions: {
      powerCapHash: number;
    }[];
    displayVersionWatermarkIcons: string[];
  };
  acquireRewardSiteHash: number;
  acquireUnlockHash: number;
  sockets: {
    detail: string;
    socketEntries: {
      socketTypeHash: number;
      singleInitialItemHash: number;
      reusablePlugItems: any[];
      preventInitializationOnVendorPurchase: boolean;
      preventInitializationWhenVersioning: boolean;
      hidePerksInItemTooltip: boolean;
      plugSources: number;
      reusablePlugSetHash: number;
      overridesUiAppearance: boolean;
      defaultVisible: boolean;
    }[];
    intrinsicSockets: any[];
    socketCategories: {
      socketCategoryHash: number;
      socketIndexes: number[];
    }[];
  };
  investmentStats: {
    statTypeHash: number;
    value: number;
    isConditionallyActive: boolean;
  }[];
  perks: {
    requirementDisplayString: string;
    perkHash: number;
    perkVisibility: number;
  }[];
  allowActions: boolean;
  doesPostmasterPullHaveSideEffects: boolean;
  nonTransferrable: boolean;
  itemCategoryHashes: number[];
  specialItemType: number;
  itemType: number;
  itemSubType: number;
  classType: number;
  breakerType: number;
  equippable: boolean;
  damageTypeHashes: number[];
  damageTypes: number[];
  defaultDamageType: number;
  defaultDamageTypeHash: number;
  isWrapper: boolean;
  traitIds: string[];
  traitHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
  blacklisted: boolean;
}
