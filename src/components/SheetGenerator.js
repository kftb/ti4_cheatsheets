import React from 'react';
import { Page, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';
import { useSetupStore } from '../context/SetupContext';
import { getEveryNth } from '../libs/getEveryNth';

function SheetGenerator() {
  // load selected factions loaded in from previous page
  // TODO: Consider parsing them into the url instead
  const selectedFactions = useSetupStore((state) => state.factions);
  const config = useSetupStore((state) => state.config);
  const factions = selectedFactions.sort();

  // Create styles
  const styles = StyleSheet.create({
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

  if (config.page_size === 'a4') {
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
        <View style={styles.section}>{factionViewLeftImages}</View>
        <View style={styles.section}>{factionViewRightImages}</View>
      </>
    );
  } else if (config.page_size === 'letter') {
    styles.image = { marginVertical: 3, marginHorizontal: 2, maxWidth: '98%' };
    styles.page = { ...styles.page, marginTop: 10 };

    const factionsLeft = getEveryNth(factions, 3, 0);
    const factionsMiddle = getEveryNth(factions, 3, 1);
    const factionsRight = getEveryNth(factions, 3, 2);

    const factionViewLeftImages = factionsLeft.map((fl) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fl}.png`} />
    ));

    const factionViewMiddleImages = factionsMiddle.map((fm) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fm}.png`} />
    ));

    const factionViewRightImages = factionsRight.map((fr) => (
      <Image key={uniqueId()} style={styles.image} src={`/factions/cards/${fr}.png`} />
    ));

    pageContent = (
      <>
        <View style={styles.section}>{factionViewLeftImages}</View>
        <View style={styles.section}>{factionViewMiddleImages}</View>
        <View style={styles.section}>{factionViewRightImages}</View>
      </>
    );
  }

  const pdf = (
    <Document>
      <Page
        size={config.page_size}
        orientation={config.page_size === 'a4' ? 'portrait' : 'landscape'}
        style={styles.page}
      >
        {pageContent}
      </Page>
    </Document>
  );

  return (
    <>
      <div className="w-full">
        <PDFViewer width="100%" height="1500px">
          {pdf}
        </PDFViewer>
      </div>
    </>
  );
}

export default SheetGenerator;
