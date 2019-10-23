import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.css';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" /><FormattedMessage id="SectionHowItWorks.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
        <br></br><img src="https://sharetribe.imgix.net/5d3161f9-74a0-41ce-8f06-6a3acc257b60%2F5dafa75b-00c1-4209-af96-16a59ac0f96c?auto=format&fit=clip&h=1024&ixlib=java-1.1.1&w=1024&s=738e8ae408d2a1467f478f9614442170" height="72"></img>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
        <br></br><img src="https://sharetribe.imgix.net/5d3161f9-74a0-41ce-8f06-6a3acc257b60%2F5dafa75e-d897-433b-b954-ec443340e5e8?auto=format&fit=clip&h=1024&ixlib=java-1.1.1&w=1024&s=0ad0ca181be908c1f25c1812494a2f24" height="72"></img>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <br></br><img src="https://sharetribe.imgix.net/5d3161f9-74a0-41ce-8f06-6a3acc257b60%2F5dafa761-8215-4fc6-96e4-4bdac3552dd3?auto=format&fit=clip&h=1024&ixlib=java-1.1.1&w=1024&s=714200013797f76ba8148b76e1c04eed" height="72"></img>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </p>
        </div>
      </div>

      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
