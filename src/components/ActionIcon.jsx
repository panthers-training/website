import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Dumbbell, Menu, MessageCircle, Stethoscope } from 'lucide-react';

export function ArrowIcon(props) {
  return <ArrowUpRight aria-hidden="true" strokeWidth={2.25} {...props} />;
}

export function MenuIcon(props) {
  return <Menu aria-hidden="true" strokeWidth={2} {...props} />;
}

export function CheckIcon(props) {
  return <Check aria-hidden="true" strokeWidth={2.5} {...props} />;
}

export function DumbbellIcon(props) {
  return <Dumbbell aria-hidden="true" strokeWidth={1.8} {...props} />;
}

export function MedicalIcon(props) {
  return <Stethoscope aria-hidden="true" strokeWidth={1.8} {...props} />;
}

export function MessageIcon(props) {
  return <MessageCircle aria-hidden="true" strokeWidth={1.8} {...props} />;
}

export function PreviousIcon(props) {
  return <ChevronLeft aria-hidden="true" strokeWidth={2} {...props} />;
}

export function NextIcon(props) {
  return <ChevronRight aria-hidden="true" strokeWidth={2} {...props} />;
}
