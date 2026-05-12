import type { Metadata } from "next";
import ServicePage from "../../../components/shared/ServicePage";
import { getService } from "../../../components/shared/servicesData";

const service = getService("tooth-colored-fillings")!;

export const metadata: Metadata = {
  title: `${service.label} — Bal Dental Centre, Scarborough`,
  description: service.shortDescription,
};

export default function Page() {
  return <ServicePage service={service} />;
}
