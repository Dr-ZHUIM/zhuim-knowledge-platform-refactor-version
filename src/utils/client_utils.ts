import { ColumnsType } from "antd/es/table"

export function resolveSearch(params: Record<string,any | undefined>){
  let search = ''
  for (const key in params) {
    if (params[key] !== undefined) {
      search += search[0] !== '?' ? `?${key}=${params[key]}` : `&${key}=${params[key]}`
    }
  }
  return search
}

export function createColumns<T>(columns: ColumnsType<T>):ColumnsType<T>{
  return columns.map(c => ({
    ...c,
    align: 'center'
  }))
}
