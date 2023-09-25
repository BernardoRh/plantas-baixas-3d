// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshLambertBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
// sop
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { ColorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Color";
import { FileFBXSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileFBX";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HierarchySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy";
import { InstanceSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { ScatterSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_scene_01 = {
  nodes: [
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshLambertBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    PerspectiveCameraObjNode,
    BoxSopNode,
    CameraControlsSopNode,
    ColorSopNode,
    FileFBXSopNode,
    HemisphereLightSopNode,
    HierarchySopNode,
    InstanceSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PlaneSopNode,
    PolarTransformSopNode,
    ScatterSopNode,
    SpotLightSopNode,
    TransformSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
