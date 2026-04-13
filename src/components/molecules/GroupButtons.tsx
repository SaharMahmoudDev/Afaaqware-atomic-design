import React, { ReactNode } from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
interface props{
  titleText:ReactNode,
  variantButton?:string,
    variantText?:string

}


const GroupButtons = ({titleText,  variantButton,variantText
}:props) => {
  return (<>
  
  
    {/* Primary Buttons */}
          <div className="flex justify-center items-center gap-10 ">
            <Button>
              <Text variant="white" size="sm" center={true}>
              {/* small  primary  */}
              {titleText}
              </Text>
            </Button>

            <Button size="md">
              <Text variant="white" center={true}>
              {/* medium  primary  */}
                            {titleText}

              </Text>
            </Button>

            <Button size="lg">
              <Text variant="white" size="lg" center={true}>
              {/* larg  primary  */}
                            {titleText}

              </Text>
            </Button>

            <Button size="lg" disabled={true}>
              <Text variant="white" size="lg" center={true}>
              {/* larg  disabled */}
                            {titleText}

              </Text>
            </Button>
          </div>
  </>
    


  )
}

export default GroupButtons