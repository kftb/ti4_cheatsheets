import React from 'react';
import { Page, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';
import { useConfigStore, useSetupStore } from '../context/SetupContext';
import { getEveryNth } from '../libs/getEveryNth';
import { useRouter } from 'next/router';
import FactionCardSheetGenerator from './FactionCardSheetGenerator';

function getLayout(numCards, oldStyles) {
  const styles = {};
  if (numCards <= 6) {
    styles.image = { marginVertical: 3, marginHorizontal: 2, maxWidth: '98%' };
    styles.page = { ...oldStyles.page, marginLeft: 2, marginRight: 2, marginTop: 10 };
  } else if (numCards > 6) {
    styles.image = { marginVertical: 1, marginHorizontal: 2, maxWidth: '88%' };
    styles.page = { ...oldStyles.page, marginLeft: 10, marginRight: 10 };
  }
  return { ...oldStyles, ...styles };
}

function SheetGenerator() {
  //TODO: Find better solution than hardcoding inner height on first render
  let height = window.innerHeight;

  // load selected factions loaded in from previous page
  // TODO: Consider parsing them into the url instead
  const selectedFactions = useSetupStore((state) => state.factions);
  const config = useConfigStore((state) => state.config);
  const factions = selectedFactions.sort();
  const router = useRouter();

  if (factions.length === 0) {
    router.push('/');
  }

  // Create styles
  let styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff',
    },
    section: {
      flex: 1,
      alignContent: 'center',
    },
  });

  let pageContent = '';

  if (config.letter === false) {
    styles.image = { marginVertical: 2, marginHorizontal: 5, maxWidth: '95%' };
    styles.page = { ...styles.page, marginTop: 5 };

    const factionsLeft = getEveryNth(factions, 2, 0);
    const factionsRight = getEveryNth(factions, 2, 1);

    const factionViewLeftImages = factionsLeft.map((fl) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fl}.png`} />
    ));

    const factionViewRightImages = factionsRight.map((fr) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fr}.png`} />
    ));

    pageContent = (
      <>
        <View key={uniqueId()} style={styles.section}>
          {factionViewLeftImages}
        </View>
        <View key={uniqueId()} style={styles.section}>
          {factionViewRightImages}
        </View>
      </>
    );
  } else if (config.letter === true) {
    styles = getLayout(factions.length, styles);

    const factionsLeft = getEveryNth(factions, 2, 0);
    const factionsRight = getEveryNth(factions, 2, 1);

    const factionViewLeftImages = factionsLeft.map((fl) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fl}.png`} />
    ));

    const factionViewRightImages = factionsRight.map((fr) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fr}.png`} />
    ));

    pageContent = (
      <>
        <View key={uniqueId()} style={styles.section}>
          {factionViewLeftImages}
        </View>
        <View key={uniqueId()} style={styles.section}>
          {factionViewRightImages}
        </View>
      </>
    );
  }

  const factionSheet = (
    <Page
      size={config.letter === false ? 'a4' : 'letter'}
      orientation={config.letter === false ? 'portrait' : 'portrait'}
      style={styles.page}
      key={uniqueId()}
    >
      {pageContent}
    </Page>
  );

  const strategyCardsSheet = <FactionCardSheetGenerator letter={config.letter} />;
  const docContent = () => {
    const content = [];

    // if pagePerPlayer is true generate a set of sheets per selected faction
    if (config.pagePerPlayer) {
      // loop over length of faction array
      for (let i = 0; i < factions.length; i++) {
        // if strategy card option was selected add that first
        if (config.sc) {
          content.push(strategyCardsSheet);
        }
        content.push(factionSheet);
      }
    } else {
      if (config.sc) {
        content.push(strategyCardsSheet);
      }
      content.push(factionSheet);
    }
    return content;
  };

  const pdf = (
    <>
      <Document title="TI4 Cheatsheet">{docContent()}</Document>
    </>
  );

  return (
    <PDFViewer height={`${height}px`} width="100%">
      {pdf}
    </PDFViewer>
  );
}

export default SheetGenerator;
