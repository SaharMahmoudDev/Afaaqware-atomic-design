import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import AuthLayout from "@/components/layout/AuthLayout";
import Box from "@/components/molecules/Box";
export default function page() {
  return (
    <div>
      <AuthLayout>
        <div className="grid grid-cols-3 gap-3">
          <Box
            text="Choose a template or start from scratch using our easy-to-use builder"
            title="Create Your Survey"
          />
          <Box
            text="Send your survey via email, social media, or embed it in your website"
            title="Share With Your Audience"
          />
          <Box
            text="Get instant insights with clean charts and downloadable reports"
            title="Analyze Responses"
          />
        </div>

        

        {/* Reusable Buttons */}
        <div className="flex flex-col justify-center items-center my-20 bg-gray-100 p-10">
          {/* Primary Buttons */}
          <div className="flex justify-center items-center gap-10 ">
            <Button>
              <Text variant="white" size="sm" center={true}>
              small  primary 
              </Text>
            </Button>

            <Button size="md">
              <Text variant="white" center={true}>
              medium  primary 
              </Text>
            </Button>

            <Button size="lg">
              <Text variant="white" size="lg" center={true}>
              larg  primary 
              </Text>
            </Button>

            <Button size="lg" disabled={true}>
              <Text variant="white" size="lg" center={true}>
              larg  disabled
              </Text>
            </Button>
          </div>

          {/* Secondary Buttons */}
          <div className="flex justify-center items-center gap-5 my-5">
            <Button variant="secondary" >
              <Text variant="primary" size="sm" center={true}>
                small secondary
              </Text>
            </Button>

            <Button variant="secondary" size="md" >
              <Text variant="primary"  center={true}>
              medium  secondary 
              </Text>
            </Button>

            <Button variant="secondary" size="lg" >
              <Text variant="primary" size="lg" center={true}>
                larg secondary
              </Text>
            </Button>

            <Button variant="secondary" size="lg" disabled={true}>
              <Text variant="primary" size="lg" center={true}>
                larg disabled
              </Text>
            </Button>

          </div>

          {/* Outline Buttons */}
<div className="flex justify-center items-center gap-5">
  <Button  variant="outline">
            <Text variant="alt" size="sm" center={true}>
            small  outline 
            </Text>
          </Button>

          <Button size="md" variant="outline">
            <Text variant="alt"  center={true}>
            medium  outline 
            </Text>
          </Button>

          <Button variant="outline" size="lg">
            <Text variant="alt" size="lg" center={true}>
            larg  outline 
            </Text>
          </Button>

   <Button variant="outline" size="lg" disabled={true}>
            <Text variant="alt" size="lg" center={true}>
            larg  disabled
            </Text>
          </Button>

          </div>
        </div>
      </AuthLayout>
    </div>
  );
}
