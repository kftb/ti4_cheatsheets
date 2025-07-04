import React, { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { factions } from '../assets/factions';
import { useConfigStore, useSetupStore } from '../context/SetupContext';
import { useRouter } from 'next/router';
import FactionCard from './FactionCard';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import HomepageSettings from './HomepageSettings';
import { Footer } from 'flowbite-react';
import HomepageFooter from './Footer';

const formValidationSchema = yup.object().shape({
  // factions: yup.bool().oneOf([true], 'ttest'),
});

function Homepage() {
  const router = useRouter();
  const addFaction = useSetupStore((state) => state.addFaction);
  const addConfig = useConfigStore((state) => state.addConfig);
  const config = useConfigStore((state) => state.config);
  const methods = useForm({
    defaultValues: { factions: '', settings: { ...config } },
    resolver: yupResolver(formValidationSchema),
  });
  const { control } = methods;

  // use to watch input fields
  const factionWatch = useWatch({
    name: 'factions',
    control,
  });

  const settingsWatch = useWatch({
    name: 'settings',
    control,
  });

  // Counter to see how many factions have been chosen
  const factionCounter = Object.values(factionWatch).reduce(
    (a, item) => a + (item === true ? 1 : 0),
    0,
  );

  // if (router.locale === 'US' || 'CA') {
  //   addConfig({ letter: true });
  // } else {
  //   addConfig({ letter: false });
  // }

  const onSubmit = (data) => {
    console.log(data);
    // Manual validation of more than 0, less than 8
    // TODO: Implement this through Yup validation
    if (factionCounter === 0 || factionCounter > 8) {
      gtag('event', 'wrong_selection', {
        event_category: 'error',
        event_label: 'action',
      });

      methods.setError('factions', {
        type: 'custom',
        message: 'Choose at least 1 and at most 8 factions',
      });
    } else {
      // Filter values down to 'true' = selected
      const filteredByValue = Object.fromEntries(
        Object.entries(data.factions).filter(([, value]) => value === true),
      );

      // Push all true values into new array
      let selFactions = [];
      for (const property in filteredByValue) {
        selFactions.push(property.toString());
      }

      // Add selected fashions into context
      addFaction(selFactions);
      addConfig(data.settings);

      // Send event to Google Analytics
      gtag('event', 'generate_cheatsheet', {
        event_category: 'action',
        event_label: 'action',
      });

      // Redirect to export page
      router.push('/export');
    }
  };

  const filters = ['base'];
  if (settingsWatch) {
    Object.entries(settingsWatch).forEach(([key, value]) => {
      if (value === true) {
        filters.push(key);
      }
    });
  }

  const newFactionCards = factions
    .filter((f, i) => filters.includes(f.expType))
    .map((f, i) => (
      <FactionCard key={f.id} factionCounter={factionCounter} index={i} faction={f} />
    ));

  const counterWarning = () => {
    let remaining = 8 - factionCounter;
    if (factionCounter == 8) {
      return <span>You are good to go!</span>;
    } else if (factionCounter > 8) {
      return <span>Please limit yourself to 8</span>;
    } else if (factionCounter > 4) {
      return <span>You can select {remaining} more factions.</span>;
    } else {
      null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="grid justify-items-center">
        <div className="grid flex-nowrap justify-center justify-items-center">
          <h1 className="mt-10 text-4xl font-slider title uppercase ">TI4 Cheat sheet generator</h1>
        </div>
        <h2 className="my-5">Pick the factions in your game</h2>
        <div className="mx-5 md:mx-10">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <HomepageSettings />
              <button
                className="my-6 py-2 px-4  bg-orange-800
               hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 
               text-white 
               w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 
               transition ease-in duration-200 
               text-center text-base font-semibold shadow-md 
               focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Generate cheat sheet
              </button>
              <span className="my-2 text-blue-600">
                &nbsp;&nbsp;
                {counterWarning()}
              </span>

              <ul className="grid gap-3 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {newFactionCards}
              </ul>
            </form>
          </FormProvider>
        </div>
        <div>
          <HomepageFooter />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
