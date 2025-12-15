import { Card, CardHeader, CardContent } from "./Card";

type Props = {
  label: string;
  value: string;
  helper?: string;
};

export default function KpiCard({ label, value, helper }: Props) {
  return (
    <Card className="p-0">
      <CardHeader>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {label}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">{value}</p>
        {helper ? (
          <p className="mt-2 text-xs text-gray-500 leading-snug">{helper}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

