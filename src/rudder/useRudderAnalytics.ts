import { useEffect, useState } from 'react';
import type { RudderAnalytics } from '@rudderstack/analytics-js';
import { DATA_PLANE_URL, WRITE_KEY } from '@/utilities/constants';



const useRudderStackAnalytics = (): RudderAnalytics | undefined => {
  const [analytics, setAnalytics] = useState<RudderAnalytics>();

  useEffect(() => {
    if (!analytics) {
      const initialize = async () => {
        const { RudderAnalytics } = await import('@rudderstack/analytics-js');
        const analyticsInstance = new RudderAnalytics();

        analyticsInstance.load(WRITE_KEY, DATA_PLANE_URL);

        analyticsInstance.ready(() => {
          console.log('We are all set!!!');
        });

        window.rudderanalytics = analyticsInstance;
        setAnalytics(analyticsInstance);
      };

      initialize().catch(e => console.log(e));
    }
  }, [analytics]);

  return analytics;
};

export default useRudderStackAnalytics;
