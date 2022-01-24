import React from 'react';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';
import { verifyColor } from '../../js/ColorSelector.js';
import { createRegistry, RegistryProvider } from '@wordpress/data';

import {
  Popup,
  PopupSettings,
  reserveId,
  deleteId,
} from '../../popup/src/popup.js';
import { AwardCardSave } from './save.js';
import Recipients, { addRecipient, store }  from './recipients';

export class AwardCardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;
    this.registry = createRegistry( {} );
    this.registry.register(store);

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.trimStateAttribute = this.trimStateAttribute.bind(this);

    this.state = {
      overlayOpacity: this.attributes.overlayOpacity,
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      id: this.attributes.id,
      customId: this.attributes.customId,
      optionSize: this.attributes.optionSize,
      buttonTitle: this.attributes.buttonTitle,
      name: this.attributes.name,
      desc: this.attributes.desc,
    };
  }

  componentDidMount() {
    reserveId(
      (x) => this.setStateAttributes({ id: x }),
      this.state.id,
    );
    this.setStateAttributes({ bgColor: {
        color: verifyColor(this.state.bgColor),
        slug: this.state.bgColor.slug,
      }
    });
    this.setStateAttributes({ textColor: {
        color: verifyColor(this.state.textColor),
        slug: this.state.textColor.slug,
      }
    });
  }

  componentWillUnmount() {
    deleteId(this.state.id);
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  // returns (x) => null
  trimStateAttribute(attr) {
    return (x) => {
        this.setState(
        { [attr]: x },
        () => { this.setAttributes({ [attr]: x.trim() }) }
      )
    }
  }

  render() {
    let blockProps = this.props.blockProps;
    let registry = this.registry;

    return (
      <>
        <div {...blockProps }
          className = {
            [
              "ncs4-award-card",
              Popup.classType,
              blockProps.className,
            ].join(' ')
          }
        >
          <h2 className = "ncs4-award-card__name">
            { this.state.name }
          </h2>
          <RichText
            className = "ncs4-award-card__description"
            tagName = "p"
            value = { this.state.desc }
            onChange = { this.trimStateAttribute("desc") }
            placeholder = "Award description..."
          />
          <div className = "ncs4-award-card__edit-recipients">
            <p>Recipients</p>
            <span
              className = "dashicons dashicons-plus"
              title = "Add recipient"
              onClick = { () => addRecipient(registry) }
            />
          </div>
          <RegistryProvider value={ registry }>
            <Recipients/>
          </RegistryProvider>
        </div>
        <InspectorControls>
          <PanelBody
            title = "Award info"
            initialOpen = { true }
          >
            <TextControl
              value = { this.state.name }
              label = "Award name"
              help = "Name of the award"
              placeholder = "World's Best Web Dev"
              onChange = { this.trimStateAttribute("name") }
            />
          </PanelBody>
          <PopupSettings
            attributes = { this.state }
            callback = { this.setStateAttributes }
          />
        </InspectorControls>
      </>
    );
  }
}