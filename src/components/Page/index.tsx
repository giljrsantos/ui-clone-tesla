import React from 'react';
import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';
import models from './ModelsListt';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
      <Container>
          <ModelsWrapper>
            <div>

              {models.map(model => (
                <ModelSection 
                  key={model.id}
                  className="colored"
                  modelName={model.title}
                  overlayNode={
                    <DefaultOverlayContent 
                      label={model.title}
                      description={model.Description}
                    />
                  }
              />                
              ))}
            </div>

            <Spacer />
            
            <UniqueOverlay />

          </ModelsWrapper>
      </Container>
  );
}

export default Page;