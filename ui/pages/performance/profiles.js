import React, { useEffect } from 'react';
import { NoSsr } from '@layer5/sistent';
import PerformanceProfiles from '../../components/MesheryPerformance/PerformanceProfiles';
import { updatepagepath } from '../../lib/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import { getPath } from '../../lib/path';

function Results({ updatepagepath }) {
  useEffect(() => {
    updatepagepath({ path: getPath() });
  }, [updatepagepath]);

  return (
    <NoSsr>
      <Head>
        <title>Performance Profiles | Meshery</title>
      </Head>
      <PerformanceProfiles />
    </NoSsr>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updatepagepath: bindActionCreators(updatepagepath, dispatch),
});

export default connect(null, mapDispatchToProps)(Results);
