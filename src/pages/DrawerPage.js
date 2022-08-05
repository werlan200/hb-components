import React, { useState } from "react";
import Drawer from "../components/Drawer/Drawer";
import Button from "../components/Button/Button";

const DrawerPage = () => {
  return (
    <div>
      <button>Open Drawer</button>
      <Drawer
        title="This is drawer title."
        subtitle="subundan title"
        isClickingOutsideEnabled={true}
        width="50%"
        footerChildren={
          <>
            <Button
              className={"btn default secondary"}
              buttonText="adamgeldi"
              onClick={() => console.log("btn click")}
            />

            <Button className={"btn tiny primary"} buttonText="adamgeldi" />
          </>
        }
      >
        <p>
          s.aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Ornare
          aenean euismod elementum nisi quis eleifend quam. Et odio pellentesque
          diam volutpat. Eget gravida cum sociis natoque penatibus. Sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
          Urna id volutpat lacus laoreet non. Sed augue lacus viverra vitae
          congue eu. Nulla at volutpat diam ut venenatis tellus in metus. In hac
          habitasse platea dictumst quisque sagittis purus sit. Purus in massa
          tempor nec feugiat. Mattis ullamcorper velit sed ullamcorper morbi
          tincidunt ornare massa. At auctor urna nunc id cursus metus. Posuere
          morbi leo urna molestie at elementum eu facilisis. Fermentum leo vel
          orci porta non. Pharetra vel turpis nunc eget lorem dolor. Ipsum nunc
          aliquet bibendum enim facilisis. Cum sociis natoque penatibus et
          magnis dis parturient montes nascetur. Sed tempus urna et pharetra
          pharetra massa massa ultricies mi. Sem integer vitae justo eget magna
          fermentum. Commodo odio aenean sed adipiscing diam donec adipiscing
          tristique. Congue mauris rhoncus aenean vel elit scelerisque. Nunc
          aliquet bibendum enim facilisis gravida neque convallis a cras.
          Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
          Arcu felis bibendum ut tristique et egestas. Ut ornare lectus sit amet
          est placerat in egestas. Ac tortor vitae purus faucibus ornare
          suspendisse sed nisi. Elementum nisi quis eleifend quam adipiscing
          vitae proin sagittis nisl. Tristique nulla aliquet enim tortor at
          auctor. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Quis
          risus sed vulputate odio. Fermentum iaculis eu non diam phasellus
          vestibulum lorem sed risus. Tincidunt dui ut ornare lectus sit amet
          est placerat. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque. Tincidunt lobortis feugiat vivamus at augue. Ornare arcu
          dui vivamus arcu felis bibendum ut. Orci ac auctor augue mauris augue
          neque gravida. Leo vel orci porta non pulvinar neque laoreet. Egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium. Morbi
          tincidunt ornare massa eget egestas. Sapien faucibus et molestie ac
          feugiat sed lectus. Mi ipsum faucibus vitae aliquet nec ullamcorper.
          Ac orci phasellus egestas tellus rutrum tellus pellentesque. Dolor
          morbi non arcu risus quis varius quam quisque id. Imperdiet massa
          tincidunt nunc pulvinar sapien et ligula. Tempor nec feugiat nisl
          pretium fusce id. Ut tellus elementum sagittis vitae. Bibendum neque
          egestas congue quisque egestas diam in. Eu lobortis elementum nibh
          tellus molestie nunc non blandit massa. Est ultricies integer quis
          auctor elit. Id diam maecenas ultricies mi eget mauris pharetra. Nisi
          porta lorem mollis aliquam ut porttitor leo. Volutpat odio facilisis
          mauris sit amet massa. Viverra mauris in aliquam sem fringilla ut
          morbi. Potenti nullam ac tortor vitae purus faucibus ornare
          suspendisse. Et netus et malesuada fames. Ac orci phasellus egestas
          tellus rutrum tellus pellentesque eu. Ut eu sem integer vitae justo
          eget magna fermentum iaculis.
        </p>
        <p>
          fringilla phasellus faucibus scelerisque eleifend donec pretium. Morbi
          tincidunt ornare massa eget egestas. Sapien faucibus et molestie ac
          feugiat sed lectus. Mi ipsum faucibus vitae aliquet nec ullamcorper.
          Ac orci phasellus egestas tellus rutrum tellus pellentesque. Dolor
          morbi non arcu risus quis varius quam quisque id. Imperdiet massa
        </p>
      </Drawer>
    </div>
  );
};

export default DrawerPage;
