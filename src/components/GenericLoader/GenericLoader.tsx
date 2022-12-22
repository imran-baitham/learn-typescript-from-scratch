import { Skeleton } from '@mantine/core'

export interface GenericLoaderProps {
  shapes?: Array<Array<string>>
}

export const GenericLoader = (_props: GenericLoaderProps) => {
  const { shapes } = _props
  const defaultShapes = [
    ['circle', 'line', 'line', 'line'],
    ['line', 'line', 'line', 'line'],
    ['line', 'circle'],
  ]

  const shapesData = shapes ? shapes : defaultShapes
  return (
    <div className="p-5 flex-1">
      {shapesData.map((shape, index) => {
        return (
          <div key={`shapes-${index}`} className="flex items-center">
            {shape.map((item, _index) => {
              return (
                <div key={`lines-${_index}`} className="w-full contents">
                  {item === 'circle' ? (
                    <Skeleton
                      circle
                      className="w-8 h-8 rounded-full flex-none z-0 m-1"
                    />
                  ) : (
                    <div className="flex flex-1 m-2">
                      <Skeleton
                        height={8}
                        width="99%"
                        className="h-4 w-full z-0"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
