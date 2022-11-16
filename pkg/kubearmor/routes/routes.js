import ListKubeArmor from '../pages/c/_cluster/kubearmor/index.vue'

const routes = [
  {
    name: `c-cluster-kubearmor`,
    path: `c/:cluster/kubearmor`,
    component: ListKubeArmor,
  },
]

export default routes
