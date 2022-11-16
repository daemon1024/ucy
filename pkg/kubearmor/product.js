export const NAME = 'KubeArmor'

export function init(plugin, store) {
  const { product, basicType, configureType, virtualType, headers, hideBulkActions } = plugin.DSL(store, NAME)

  product({
    inStore: 'cluster',
    removable: false,
    inExplorer: true,
  })

  virtualType({
    label: 'KubeArmor',
    name: 'dashboard',
    namespaced: false,
    weight: 99,
    route: { name: 'c-cluster-kubearmor' },
    overview: true,
  })
  basicType(['dashboard'])
}
