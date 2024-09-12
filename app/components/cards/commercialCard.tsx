import { Card, CardBody, Image, Chip, Progress } from "@nextui-org/react";
import { MapPin, TrendingUp } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const CommercialPropertyCard = ({
  imageUrl,
  investmentAmount,
  propertyName,
  location,
  riskLevel,
  irrValue,
  fundedPercentage,
  status,
}) => {
  const riskColor =
    riskLevel === "High Risk"
      ? "bg-red-500"
      : riskLevel === "Medium Risk"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <Card className="relative z-0 w-full group cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300">
      <div className="relative">
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
          {/* Inline price section */}
          <div className="w-auto max-w-auto h-14 p-2 absolute z-20 dark:bg-neutral-800 bg-neutral-100 rounded-xl inline-flex items-center justify-start backdrop-blur-[10px] bg-background transition ease-in-out duration-150 cursor-pointer border hover:border-neutral-500/20 border-transparent">
            <div className="dark:text-neutral-300 text-neutral-700">
              <div>
                <p className="text-xs font-normal">Investment Amount</p>
                <p className="text-2xl font-bold text-primary">{investmentAmount}</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="Card background"
          className="object-cover rounded-b-none group-hover:scale-125 transition-transform ease-in-out duration-300"
          src={imageUrl}
          height={250}
          width="100%"
        />
      </div>
      <CardBody className="relative pb-6 bg-background z-10">
        <div className="flex justify-between items-center">
          <Chip
            variant="dot"
            color={status === "Live Now" ? "success" : "warning"}
            size="sm"
            className="text-xs"
          >
            {status}
          </Chip>
          <Chip
            variant="flat"
            size="sm"
            className={`${riskColor} text-white text-sm font-medium`}
          >
            {riskLevel}
          </Chip>
        </div>
        <div className="mt-2">
          <h4 className={`${poppins.className} font-bold text-2xl`}>
            {propertyName}
          </h4>
        </div>
        <div className="flex items-center justify-start gap-6 mt-2 space-x-2 mb-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-xs font-medium">{location}</p>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <p className="text-xs font-medium">
              IRR: {irrValue}%
            </p>
          </div>
        </div>
        <div className="mt-2">
          <Progress value={fundedPercentage} size="sm" color="success" />
          <p className="text-xs mt-1">{fundedPercentage}% Funded</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default CommercialPropertyCard;
