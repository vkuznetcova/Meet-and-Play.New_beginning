import { setClient } from '@/services/request'

export default (ctx) => {
    setClient(ctx.$axios)
}