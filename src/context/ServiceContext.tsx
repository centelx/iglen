import { createContext, useContext, useState, ReactNode } from 'react';

type ServiceType = 'mechanics' | 'ac';

interface ServiceContextType {
  serviceType: ServiceType;
  setServiceType: (type: ServiceType) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [serviceType, setServiceType] = useState<ServiceType>('mechanics');

  return (
    <ServiceContext.Provider value={{ serviceType, setServiceType }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
}
